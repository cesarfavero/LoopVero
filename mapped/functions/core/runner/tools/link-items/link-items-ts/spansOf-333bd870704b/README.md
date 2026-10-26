# `spansOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741133-741139](../../../../../../../../reference/runtime/host-main.cjs#L741133-L741139) | `FunctionDeclaration` | não | `text3, needle` |
| [evaluation:482080-482086](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482080-L482086) | `FunctionDeclaration` | não | `text3, needle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741133-741139](../../../../../../../../reference/runtime/host-main.cjs#L741133-L741139) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482080-482086](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482080-L482086) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:741133

Chamadas escritas diretamente neste corpo: `spans.push`, `text3.indexOf`.

Alvos de atribuição ou incremento: `at3`.

SHA-256 do trecho: `c313569f6cbe6b813d4594096d8312672383f651fef40b90c4f0f98b3327011f`.

### evaluation:482080

Chamadas escritas diretamente neste corpo: `spans.push`, `text3.indexOf`.

Alvos de atribuição ou incremento: `at3`.

SHA-256 do trecho: `c313569f6cbe6b813d4594096d8312672383f651fef40b90c4f0f98b3327011f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
