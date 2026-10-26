# `indentedCodeRuns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-notification-text.ts` · [README do módulo](../../../../../modules/shared/media/markdown-notification-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722250-722278](../../../../../../reference/runtime/host-main.cjs#L722250-L722278) | `FunctionDeclaration` | não | `source, fences` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722250-722278](../../../../../../reference/runtime/host-main.cjs#L722250-L722278) | 8 | 1 | 0 | 1 | 0 | 0 |

### host:722250

Chamadas escritas diretamente neste corpo: `/^[ \t]/.test`, `INDENTED_CODE_PATTERN.test`, `LIST_ITEM_PATTERN.test`, `fences.map`, `isInsideFenceBody`, `line.trim`, `monotonicRangeProbe`, `runs.push`, `source.slice`, `source.split`.

Alvos de atribuição ou incremento: `afterBlank`, `inList`, `offset2`, `open13`.

SHA-256 do trecho: `74171bb860e5befed906e047c4e467ab5d8665d15f78c18860302cc2385f81eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
