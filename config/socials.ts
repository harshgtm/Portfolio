import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@harshgtm",
    icon: Icons.gitHub,
    link: "https://github.com/harshgtm",
  },
  {
    name: "LinkedIn",
    username: "Harsh Gautam",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/harshgautam897",
  },
  {
    name: "Gmail",
    username: "harsh.gautam897",
    icon: Icons.gmail,
    link: "mailto:harshgautam897@gmail.com",
  },
  {
    name: "Stack Overflow",
    username: "harsh-gautam",
    icon: Icons.stackoverflow,
    link: "https://stackoverflow.com/users/16135261/harsh-gautam",
  },
];
