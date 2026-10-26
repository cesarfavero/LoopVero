# `grantedItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/cookie-origin-approval-cards.ts` · [README do módulo](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774985-774988](../../../../../../reference/runtime/host-main.cjs#L774985-L774988) | `FunctionDeclaration` | não | `items, grants` |
| [evaluation:574614-574617](../../../../../../reference/runtime/sand-eval-runner.cjs#L574614-L574617) | `FunctionDeclaration` | não | `items, grants` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774985-774988](../../../../../../reference/runtime/host-main.cjs#L774985-L774988) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574614-574617](../../../../../../reference/runtime/sand-eval-runner.cjs#L574614-L574617) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774985

Chamadas escritas diretamente neste corpo: `.filter`, `grants.map`, `new Set`.

SHA-256 do trecho: `9b51698fdc44aa77f12a633ca535322e1efd372872efcf6959ee387250275837`.

### evaluation:574614

Chamadas escritas diretamente neste corpo: `.filter`, `grants.map`, `new Set`.

SHA-256 do trecho: `9b51698fdc44aa77f12a633ca535322e1efd372872efcf6959ee387250275837`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
