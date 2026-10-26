# `sandSecureFillTargetKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727512-727516](../../../../../../../reference/runtime/host-main.cjs#L727512-L727516) | `FunctionDeclaration` | não | `target` |
| [evaluation:561967-561971](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561967-L561971) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727512-727516](../../../../../../../reference/runtime/host-main.cjs#L727512-L727516) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561967-561971](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561967-L561971) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:727512

Chamadas escritas diretamente neste corpo: `ID_CLASS_ATTRIBUTE_OR_PSEUDO_PATTERN.test`, `PLAYWRIGHT_REF_TARGET_PATTERN.test`, `target.trim`.

SHA-256 do trecho: `e36d4457d480eb89ef276a46cc3b5c07174afdd31e96e51a7acc100ab69e5f1a`.

### evaluation:561967

Chamadas escritas diretamente neste corpo: `ID_CLASS_ATTRIBUTE_OR_PSEUDO_PATTERN.test`, `PLAYWRIGHT_REF_TARGET_PATTERN.test`, `target.trim`.

SHA-256 do trecho: `e36d4457d480eb89ef276a46cc3b5c07174afdd31e96e51a7acc100ab69e5f1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
