// custom.d.ts
interface Window {
  MathJax: {
    startup: {
      pageReady: () => Promise<void>;
      output: string;
    };
    svg: {
      // Add the properties you need here
    };
    loader: {
      load: string[];
    };
  };
}
