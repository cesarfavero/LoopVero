# `rejectUnknownCookieProfileIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775140-775152](../../../../../../../reference/runtime/host-main.cjs#L775140-L775152) | `FunctionDeclaration` | não | `requestedIds, items` |
| [evaluation:574787-574799](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574787-L574799) | `FunctionDeclaration` | não | `requestedIds, items` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775140-775152](../../../../../../../reference/runtime/host-main.cjs#L775140-L775152) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574787-574799](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574787-L574799) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:775140

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `complaints.join`, `complaints.push`, `items.map`, `new Map`, `new Set`, `requestedIds.filter`, `unknown3.map`.

SHA-256 do trecho: `a3d9eca92fec8bf79e6b944a19b909fd35801c41349fa55de6aafb12456517fd`.

### evaluation:574787

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `complaints.join`, `complaints.push`, `items.map`, `new Map`, `new Set`, `requestedIds.filter`, `unknown2.map`.

SHA-256 do trecho: `07ae171884a3a952afa300380b0d0f2c4eafad9fb2d09477a4bf98e751efbcf9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
