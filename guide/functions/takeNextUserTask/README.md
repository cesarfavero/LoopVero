# `takeNextUserTask`

**Fonte primária:** [host-main.cjs:739619–739623](../../../reference/runtime/host-main.cjs#L739619-L739623).

**Componente:** [scheduling](../../components/scheduling/README.md). **Evidência:** implementação compilada inspecionada estaticamente; sem execução do original.

## Contrato

Recebe array mutável de itens pendentes da lane de usuário e retorna o item removido, ou `undefined` se vazio.

## Algoritmo exato

Busca o primeiro item cujo `source` seja diferente de `group-member`. Se encontrado, remove pelo índice. Caso todos sejam membros de grupo, remove índice zero.

Exemplo puramente estático: para `[group-member A, user B, user C]`, a primeira escolha é B; na próxima chamada, C; depois A. Dentro da categoria preferida, a ordem relativa permanece a de chegada. Essa consequência é deduzida diretamente de `findIndex` e `splice`.

## Efeitos

Muta o array original. Não executa a tarefa, não verifica deadlines e não muda seu `source`. Quem chama é `SandRunScheduler.pump`, depois de verificar que há usuário pendente.

## Implicação

O scheduler tem preferência de usuário humano sobre turno de membro dentro da própria lane `user`. Documentá-lo como FIFO simples perderia esse comportamento. O código não mostra um limite de starvation específico nesta função.
