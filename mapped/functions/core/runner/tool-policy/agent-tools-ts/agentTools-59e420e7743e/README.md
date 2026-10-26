# `agentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756564-756589](../../../../../../../reference/runtime/host-main.cjs#L756564-L756589) | `FunctionDeclaration` | não | `args` |
| [evaluation:542484-542509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542484-L542509) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756564-756589](../../../../../../../reference/runtime/host-main.cjs#L756564-L756589) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542484-542509](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542484-L542509) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:756564

Chamadas escritas diretamente neste corpo: `.filter`, `new Map`, `new Set`.

SHA-256 do trecho: `0a633a140c52f57effb00b7a797a32f1a05a1a66799e90f3b401236df82615db`.

### evaluation:542484

Chamadas escritas diretamente neste corpo: `.filter`, `new Map`, `new Set`.

SHA-256 do trecho: `0a633a140c52f57effb00b7a797a32f1a05a1a66799e90f3b401236df82615db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
