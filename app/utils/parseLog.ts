export const parseLogString = (logString: string) => {
   //buat merubah LOG menjadi JSOn
   const cleaned = logString.replace(/^b"/, "").replace(/"$/, "");

   return cleaned
      .split("\\n\\t")
      .map((line) => {
         const match = line.match(/^(.*?) - (INFO|WARNING|ERROR) - (.*?) - (.*)$/);

         if (!match) return null;

         const [, timestamp, level, source, message] = match;

         return {
            timestamp,
            level,
            source,
            message: message.replace(/b'/, "").replace(/'$/, ""),
         };
      })
      .filter(Boolean);
};
