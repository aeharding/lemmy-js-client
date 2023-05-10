// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommentId } from "./CommentId";
import type { PersonId } from "./PersonId";
import type { PersonMentionId } from "./PersonMentionId";

export interface PersonMention {
  id: PersonMentionId;
  recipient_id: PersonId;
  comment_id: CommentId;
  read: boolean;
  published: string;
}