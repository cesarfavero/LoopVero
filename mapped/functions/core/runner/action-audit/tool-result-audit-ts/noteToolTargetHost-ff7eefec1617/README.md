# `noteToolTargetHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-result-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-result-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699189-699191](../../../../../../../reference/runtime/host-main.cjs#L699189-L699191) | `FunctionDeclaration` | não | `ctx, toolCallId, target` |
| [evaluation:489764-489766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489764-L489766) | `FunctionDeclaration` | não | `ctx, toolCallId, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699189-699191](../../../../../../../reference/runtime/host-main.cjs#L699189-L699191) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489764-489766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489764-L489766) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699189

Chamadas escritas diretamente neste corpo: `.note`, `ctx.get`.

SHA-256 do trecho: `f6ad04bcba286decf402fe7b5737505e4a05dffe5c70c4c3dbd94c21bbf642a5`.

### evaluation:489764

Chamadas escritas diretamente neste corpo: `.note`, `ctx.get`.

SHA-256 do trecho: `f6ad04bcba286decf402fe7b5737505e4a05dffe5c70c4c3dbd94c21bbf642a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
