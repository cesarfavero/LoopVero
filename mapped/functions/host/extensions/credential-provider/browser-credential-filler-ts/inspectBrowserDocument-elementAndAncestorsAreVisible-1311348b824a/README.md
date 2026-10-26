# `inspectBrowserDocument/elementAndAncestorsAreVisible`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547269-547284](../../../../../../../reference/runtime/host-main.cjs#L547269-L547284) | `ArrowFunctionExpression` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547269-547284](../../../../../../../reference/runtime/host-main.cjs#L547269-L547284) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:547269

Chamadas escritas diretamente neste corpo: `Element.prototype.hasAttribute.call`, `Number.isFinite`, `Number.parseFloat`, `composedParent`, `getComputedStyle`, `input2.getAttribute`.

Alvos de atribuição ou incremento: `element`.

SHA-256 do trecho: `ccd6ed899f5dbef2f729ff7b475a80c56461727076884d8c016e7749dbb831e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
