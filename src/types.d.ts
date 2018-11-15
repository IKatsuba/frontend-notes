declare const env: any;

interface ShareOptions {
  title?: string;
  text?: string;
  url: string;
}

interface Navigator {
  share(options: ShareOptions): Promise<void>;
}
