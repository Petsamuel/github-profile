import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./Animated-Modal";
import { RiGitBranchLine } from "react-icons/ri";
import Card from "./Card";
import { TbEye, TbStar } from "react-icons/tb";

interface CardDetails {
  license?: { key: string };
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  name?: string;
  html_url?: string;
  language: string;
  topics: string[];
  watchers_count: number;
  open_issues_count: number;
  description: string;
  contributors_url: string;
  has_issues: boolean;
  owner: { login: string; avatar_url: string; html_url: string };
}

export function RepoAnimatedModal({
  name,
  stargazers_count,
  forks_count,
  updated_at,
  html_url,
  language,
  topics,
  watchers_count,
  open_issues_count,
  description,
  contributors_url,
  has_issues,
  owner,
  license,
}: CardDetails) {
  return (
    <div className="">
      <Modal>
        <ModalTrigger>
          <Card
            {...{
              name,
              license,
              stargazers_count,
              forks_count,
              updated_at,
              html_url,
              language,
              topics,
              watchers_count,
              open_issues_count,
              description,
              contributors_url,
              has_issues,
              owner,
            }}
          />
        </ModalTrigger>
        <div className="flex items-center justify-center">
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-4xl text-slate-300  font-bold text-center mb-8">
                {name}
              </h4>
              <p className="text-slate-300 text-center">{description}</p>

              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                <div className="flex  items-center justify-center">
                  <RiGitBranchLine className="mr-1 text-slate-300  h-4 w-4" />
                  <span className="text-slate-300  text-sm">
                    {forks_count} forks
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <TbStar className="mr-1 text-slate-300  h-4 w-4" />
                  <span className="text-slate-300  text-sm">
                    {stargazers_count} stars
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <TbEye className="mr-1 text-slate-300  h-4 w-4" />
                  <span className="text-slate-300  text-sm">
                    {watchers_count} watchers
                  </span>
                </div>
                {/* still thinking */}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                <a href={html_url}> Visit</a>
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                <a href={owner.html_url}>Contact User</a>
              </button>
            </ModalFooter>
          </ModalBody>
        </div>
      </Modal>
    </div>
  );
}
