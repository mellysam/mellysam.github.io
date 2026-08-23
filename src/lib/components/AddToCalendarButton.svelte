<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  let { end, start, title }: { end: Date; start: Date; title: string } = $props();

  const formatCalendarDate = (date: Date) =>
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
      `UID:${start.toISOString()}@mellysam.github.io`,
      `DTSTAMP:${formatCalendarDate(new Date())}`,
      `DTSTART:${formatCalendarDate(start)}`,
      `DTEND:${formatCalendarDate(end)}`,
      `SUMMARY:${escapeCalendarText(title)}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    return new File([calendar], "Hochzeit Melanie & Samuel.ics", { type: "text/calendar" });
  };

  const addToCalendar = async () => {
    const file = createCalendarFile();

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title });
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
