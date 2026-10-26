# `memoryTypeTarget`

[Componente: memory](../../components/memory/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:771533-771595](../../../reference/runtime/host-main.cjs#L771533-L771595). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`memoryTypeTarget(args)` decide onde um fato pode ser armazenado. A saída é uma resolução estruturada `{ok:true,...}` ou `{ok:false,reason}`. Não escreve o fato.

## Formato v1

`shardTarget` mapeia profile/shared_profile para tier profile e journal/shared_journal para log. Tipo sem tier conhecido é recusado. Dono user usa escopo user. Para dono bot, audiência omitida/team usa agent. Audiência privada prefere user_bot quando disponível e depois conversation; sem destino privado, recusa.

## Formato v2

`folderTarget` valida metadados e calcula o path. Tipos pertencentes ao usuário jamais aceitam audiência team; usam folder user/speaker. Audiência team em tipo bot exige team bot ou story compartilhada. Em bot compartilhado, memória privada exige `userBotScope`. O destino inclui owner, audience, path e meta validada.

## Propriedades

A distinção owner versus audience evita confundir memória pessoal compartilhada entre assistentes com memória de equipe. O schema pode permitir um tipo sem que aquela conversa possa gravá-lo. A função centraliza a escolha, mas a autorização/persistência final continua na camada que aplica a atualização.

## Casos a preservar

Uma reprodução deve manter recusas de tipo sem armazenamento, metadata inválida, ausência de escopo privado e tentativa de colocar memória do usuário na equipe. Não substituir todas essas recusas por um fallback ao arquivo do bot.
