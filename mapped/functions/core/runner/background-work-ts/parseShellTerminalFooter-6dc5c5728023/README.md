# `parseShellTerminalFooter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:590203-590221](../../../../../../reference/runtime/host-main.cjs#L590203-L590221) | `FunctionDeclaration` | não | `content` |
| [evaluation:490463-490481](../../../../../../reference/runtime/sand-eval-runner.cjs#L490463-L490481) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590203-590221](../../../../../../reference/runtime/host-main.cjs#L590203-L590221) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:490463-490481](../../../../../../reference/runtime/sand-eval-runner.cjs#L490463-L490481) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:590203

Chamadas escritas diretamente neste corpo: `.trim`, `/(?:^|\n)ended_at:\s*\S/.test`, `Number`, `Number.isInteger`, `content.match`, `footer.match`.

SHA-256 do trecho: `04b53c7f98b446bfbc5b207fc292f7b35bda0517e6f702bba341480edcd79566`.

### evaluation:490463

Chamadas escritas diretamente neste corpo: `.trim`, `/(?:^|\n)ended_at:\s*\S/.test`, `Number`, `Number.isInteger`, `content.match`, `footer.match`.

SHA-256 do trecho: `30891b4409f56eca58d8a9903d622d85860e75e4ce50154aaa686b1d94817ee0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
