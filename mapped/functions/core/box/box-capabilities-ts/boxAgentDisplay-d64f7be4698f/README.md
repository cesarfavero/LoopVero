# `boxAgentDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:475781-475789](../../../../../../reference/runtime/sand-eval-runner.cjs#L475781-L475789) | `FunctionDeclaration` | sim | `{   box,   ctx,   agentId,   reason }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475781-475789](../../../../../../reference/runtime/sand-eval-runner.cjs#L475781-L475789) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:475781

Chamadas escritas diretamente neste corpo: `box.ensureReady`, `boxAgentWindowIndex`, `withSandBoxTouchReason`.

SHA-256 do trecho: `a188814866cff3338e00bba9cd46a3ca0bf6c7504529b92783929b836f57f15c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
