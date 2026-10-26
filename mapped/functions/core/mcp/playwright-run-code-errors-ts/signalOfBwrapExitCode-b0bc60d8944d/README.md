# `signalOfBwrapExitCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700250-700253](../../../../../../reference/runtime/host-main.cjs#L700250-L700253) | `FunctionDeclaration` | não | `exitCode` |
| [evaluation:514031-514034](../../../../../../reference/runtime/sand-eval-runner.cjs#L514031-L514034) | `FunctionDeclaration` | não | `exitCode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700250-700253](../../../../../../reference/runtime/host-main.cjs#L700250-L700253) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:514031-514034](../../../../../../reference/runtime/sand-eval-runner.cjs#L514031-L514034) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:700250

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `605b3b95aec5abcb7742ecfcbd418ad4f40f20fdef58ed21f8e87e276ce834a9`.

### evaluation:514031

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `605b3b95aec5abcb7742ecfcbd418ad4f40f20fdef58ed21f8e87e276ce834a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
