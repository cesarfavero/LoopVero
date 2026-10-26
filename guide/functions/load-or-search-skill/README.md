# `loadOrSearchSkill`

[Componente: skills](../../components/skills/README.md) · [Índice](../../README.md)

**Fonte primária:** [sand-eval-runner.cjs:566055-566080](../../../reference/runtime/sand-eval-runner.cjs#L566055-L566080). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`loadOrSearchSkill(ctx,deps,search,args)` decide entre pesquisar o catálogo e carregar uma skill específica. Retorna texto/instruções ou erro visível ao modelo.

## Decisão

Normaliza strings vazias para ausência e constrói pools de skills listadas e não listadas. Sem name, query é obrigatória e aciona search com trigger query. Com name, tenta resolução exata/por rótulo usando ambos os pools. Missing conta not_found e pesquisa por query fornecida ou pelo próprio nome. Ambiguous conta a ocorrência e lança mensagem com candidatos. Found chama `loadResolvedSkill`.

## Efeito

Buscar não carrega nem aplica uma skill. Só a resolução única segue à leitura do corpo. A ferramenta pode encontrar conteúdo omitido do catálogo do prompt por orçamento, de forma que “não apareceu na lista curta” não equivale a “não existe”.

## Dependências

`searchSkills` usa mount `/skills`, ranking fuzzy e até 10 resultados. `loadResolvedSkill` faz a leitura e registra aplicação; a função aqui não executa scripts mencionados nas instruções. Erro de leitura e ambiguidade devem ser mantidos distintos na reconstrução.

## Limite

A visibilidade das pools e a permissão de leitura são fornecidas pelos stores. A função não concede direito de editar skills de terceiros nem altera um plugin remoto.
