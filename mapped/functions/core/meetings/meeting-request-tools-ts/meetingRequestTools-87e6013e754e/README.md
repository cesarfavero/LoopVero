# `meetingRequestTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meeting-request-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meeting-request-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763450-763452](../../../../../../reference/runtime/host-main.cjs#L763450-L763452) | `FunctionDeclaration` | não | `deps` |
| [evaluation:556415-556417](../../../../../../reference/runtime/sand-eval-runner.cjs#L556415-L556417) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763450-763452](../../../../../../reference/runtime/host-main.cjs#L763450-L763452) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556415-556417](../../../../../../reference/runtime/sand-eval-runner.cjs#L556415-L556417) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763450

Chamadas escritas diretamente neste corpo: `readLinesTool`, `respondTool`.

SHA-256 do trecho: `f445493b7e5d18a7b4aa9f35ad82073aa79e5a0f8971346b94bd1781dfc6a497`.

### evaluation:556415

Chamadas escritas diretamente neste corpo: `readLinesTool`, `respondTool`.

SHA-256 do trecho: `f445493b7e5d18a7b4aa9f35ad82073aa79e5a0f8971346b94bd1781dfc6a497`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
