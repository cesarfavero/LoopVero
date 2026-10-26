# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `host/extensions/inference/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/inference/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682066-682073](../../../../../../../reference/runtime/host-main.cjs#L682066-L682073) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682066-682073](../../../../../../../reference/runtime/host-main.cjs#L682066-L682073) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682066

Chamadas escritas diretamente neste corpo: `createSandTranscribeAudio`, `createSandVoicePreview`.

SHA-256 do trecho: `6fef009e0060e36e52e3c4175f725511355db8a978750613538b89e2130f922a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
