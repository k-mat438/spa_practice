# app_development

## Tables

| Name | Columns | Comment | Type |
| ---- | ------- | ------- | ---- |
| [public.action_details](public.action_details.md) | 11 |  | BASE TABLE |
| [public.action_map_courses](public.action_map_courses.md) | 5 |  | BASE TABLE |
| [public.action_orders](public.action_orders.md) | 8 |  | BASE TABLE |
| [public.actions](public.actions.md) | 12 |  | BASE TABLE |
| [public.ai_answer_reviews](public.ai_answer_reviews.md) | 7 |  | BASE TABLE |
| [public.ai_artifacts](public.ai_artifacts.md) | 8 |  | BASE TABLE |
| [public.chats](public.chats.md) | 13 |  | BASE TABLE |
| [public.course_tags](public.course_tags.md) | 5 |  | BASE TABLE |
| [public.courses](public.courses.md) | 16 |  | BASE TABLE |
| [public.daily_action_todos](public.daily_action_todos.md) | 9 |  | BASE TABLE |
| [public.managements](public.managements.md) | 6 |  | BASE TABLE |
| [public.map_orders](public.map_orders.md) | 7 |  | BASE TABLE |
| [public.maps](public.maps.md) | 15 |  | BASE TABLE |
| [public.messages](public.messages.md) | 8 |  | BASE TABLE |
| [public.notifications](public.notifications.md) | 11 |  | BASE TABLE |
| [public.pinecone_settings](public.pinecone_settings.md) | 7 |  | BASE TABLE |
| [public.policies](public.policies.md) | 4 |  | BASE TABLE |
| [public.purchases](public.purchases.md) | 13 |  | BASE TABLE |
| [public.recurring_task_logs](public.recurring_task_logs.md) | 11 |  | BASE TABLE |
| [public.recurring_tasks](public.recurring_tasks.md) | 15 |  | BASE TABLE |
| [public.recurring_todos](public.recurring_todos.md) | 9 |  | BASE TABLE |
| [public.reminder_jobs](public.reminder_jobs.md) | 10 |  | BASE TABLE |
| [public.role_policies](public.role_policies.md) | 5 |  | BASE TABLE |
| [public.roles](public.roles.md) | 4 |  | BASE TABLE |
| [public.organization_tags](public.organization_tags.md) | 5 |  | BASE TABLE |
| [public.organizations](public.organizations.md) | 7 |  | BASE TABLE |
| [public.student_actions](public.student_actions.md) | 12 |  | BASE TABLE |
| [public.student_api_usages](public.student_api_usages.md) | 5 |  | BASE TABLE |
| [public.student_course_tags](public.student_course_tags.md) | 5 |  | BASE TABLE |
| [public.student_courses](public.student_courses.md) | 10 |  | BASE TABLE |
| [public.student_maps](public.student_maps.md) | 9 |  | BASE TABLE |
| [public.student_recurring_tasks](public.student_recurring_tasks.md) | 11 |  | BASE TABLE |
| [public.student_organization_tags](public.student_organization_tags.md) | 5 |  | BASE TABLE |
| [public.student_organizations](public.student_organizations.md) | 7 |  | BASE TABLE |
| [public.student_settings](public.student_settings.md) | 11 |  | BASE TABLE |
| [public.teacher_ranks](public.teacher_ranks.md) | 6 |  | BASE TABLE |
| [public.teaching_materials](public.teaching_materials.md) | 9 |  | BASE TABLE |
| [public.todo_events](public.todo_events.md) | 6 |  | BASE TABLE |
| [public.todo_histories](public.todo_histories.md) | 6 |  | BASE TABLE |
| [public.todo_user_settings](public.todo_user_settings.md) | 9 |  | BASE TABLE |
| [public.todos](public.todos.md) | 11 |  | BASE TABLE |
| [public.user_api_keys](public.user_api_keys.md) | 6 |  | BASE TABLE |
| [public.user_role_maps](public.user_role_maps.md) | 6 |  | BASE TABLE |
| [public.users](public.users.md) | 26 |  | BASE TABLE |
| [public.schema_migrations](public.schema_migrations.md) | 1 |  | BASE TABLE |
| [public.ar_internal_metadata](public.ar_internal_metadata.md) | 4 |  | BASE TABLE |
| [public.action_detail_image_keys](public.action_detail_image_keys.md) | 5 |  | BASE TABLE |
| [public.action_image_keys](public.action_image_keys.md) | 5 |  | BASE TABLE |

## Stored procedures and functions

| Name | ReturnType | Arguments | Type |
| ---- | ------- | ------- | ---- |
| public.digest | bytea | text, text | FUNCTION |
| public.digest | bytea | bytea, text | FUNCTION |
| public.hmac | bytea | text, text, text | FUNCTION |
| public.hmac | bytea | bytea, bytea, text | FUNCTION |
| public.crypt | text | text, text | FUNCTION |
| public.gen_salt | text | text | FUNCTION |
| public.gen_salt | text | text, integer | FUNCTION |
| public.encrypt | bytea | bytea, bytea, text | FUNCTION |
| public.decrypt | bytea | bytea, bytea, text | FUNCTION |
| public.encrypt_iv | bytea | bytea, bytea, bytea, text | FUNCTION |
| public.decrypt_iv | bytea | bytea, bytea, bytea, text | FUNCTION |
| public.gen_random_bytes | bytea | integer | FUNCTION |
| public.gen_random_uuid | uuid |  | FUNCTION |
| public.pgp_sym_encrypt | bytea | text, text | FUNCTION |
| public.pgp_sym_encrypt_bytea | bytea | bytea, text | FUNCTION |
| public.pgp_sym_encrypt | bytea | text, text, text | FUNCTION |
| public.pgp_sym_encrypt_bytea | bytea | bytea, text, text | FUNCTION |
| public.pgp_sym_decrypt | text | bytea, text | FUNCTION |
| public.pgp_sym_decrypt_bytea | bytea | bytea, text | FUNCTION |
| public.pgp_sym_decrypt | text | bytea, text, text | FUNCTION |
| public.pgp_sym_decrypt_bytea | bytea | bytea, text, text | FUNCTION |
| public.pgp_pub_encrypt | bytea | text, bytea | FUNCTION |
| public.pgp_pub_encrypt_bytea | bytea | bytea, bytea | FUNCTION |
| public.pgp_pub_encrypt | bytea | text, bytea, text | FUNCTION |
| public.pgp_pub_encrypt_bytea | bytea | bytea, bytea, text | FUNCTION |
| public.pgp_pub_decrypt | text | bytea, bytea | FUNCTION |
| public.pgp_pub_decrypt_bytea | bytea | bytea, bytea | FUNCTION |
| public.pgp_pub_decrypt | text | bytea, bytea, text | FUNCTION |
| public.pgp_pub_decrypt_bytea | bytea | bytea, bytea, text | FUNCTION |
| public.pgp_pub_decrypt | text | bytea, bytea, text, text | FUNCTION |
| public.pgp_pub_decrypt_bytea | bytea | bytea, bytea, text, text | FUNCTION |
| public.pgp_key_id | text | bytea | FUNCTION |
| public.armor | text | bytea | FUNCTION |
| public.armor | text | bytea, text[], text[] | FUNCTION |
| public.dearmor | bytea | text | FUNCTION |
| public.pgp_armor_headers | record | text, OUT key text, OUT value text | FUNCTION |

## Relations

![er](schema.svg)

---

> Generated by [tbls](https://github.com/k1LoW/tbls)
