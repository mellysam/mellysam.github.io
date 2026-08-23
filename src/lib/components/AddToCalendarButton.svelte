<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { WEDDING_DAY_DATE_STRING } from "$lib/dates";

  const calendarTitle = "Hochzeit Melanie & Samuel";
  const calendarFileName = `${calendarTitle}.ics`;
  const calendarExclusiveEndDateString = "2027-08-15";
  const calendarStartDate = WEDDING_DAY_DATE_STRING.replaceAll("-", "");
  const calendarEndDate = calendarExclusiveEndDateString.replaceAll("-", "");

  const formatCalendarDateTime = (date: Date) =>
    date
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  const escapeCalendarText = (text: string) =>
    text.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;");

  const createCalendarFile = () => {
    const calendar = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//mellysam.github.io//Save the Date//DE",
      "BEGIN:VEVENT",
      `UID:${calendarStartDate}@mellysam.github.io`,
      `DTSTAMP:${formatCalendarDateTime(new Date())}`,
      `DTSTART;VALUE=DATE:${calendarStartDate}`,
      `DTEND;VALUE=DATE:${calendarEndDate}`,
      `SUMMARY:${escapeCalendarText(calendarTitle)}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    return new File([calendar], calendarFileName, { type: "text/calendar" });
  };

  const addToCalendar = async () => {
    const file = createCalendarFile();

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: calendarTitle });
      return;
    }

    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(url);
  };
</script>

<Button onclick={addToCalendar}>📅 Im Kalender Vormerken</Button>
