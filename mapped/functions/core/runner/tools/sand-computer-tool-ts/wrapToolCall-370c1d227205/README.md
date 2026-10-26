# `wrapToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777192-777194](../../../../../../../reference/runtime/host-main.cjs#L777192-L777194) | `FunctionDeclaration` | não | `value` |
| [evaluation:576837-576839](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576837-L576839) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777192-777194](../../../../../../../reference/runtime/host-main.cjs#L777192-L777194) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576837-576839](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576837-L576839) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777192

Chamadas escritas diretamente neste corpo: `new ToolCall`.

SHA-256 do trecho: `e8a2fe76529b73b89641425d2b7c60e9b855349efc0ad51aed7834f0091e49a4`.

### evaluation:576837

Chamadas escritas diretamente neste corpo: `new ToolCall`.

SHA-256 do trecho: `e8a2fe76529b73b89641425d2b7c60e9b855349efc0ad51aed7834f0091e49a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
