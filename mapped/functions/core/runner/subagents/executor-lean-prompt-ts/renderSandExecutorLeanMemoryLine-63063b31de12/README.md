# `renderSandExecutorLeanMemoryLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-lean-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552587-552604](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552587-L552604) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552587-552604](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552587-L552604) | 6 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552587

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.toUpperCase`, `lookups.charAt`, `lookups.slice`.

SHA-256 do trecho: `22adb77bc1762b6c8f827f2aecfc1216e1107ad2893c6431ba03ad56c408af07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
