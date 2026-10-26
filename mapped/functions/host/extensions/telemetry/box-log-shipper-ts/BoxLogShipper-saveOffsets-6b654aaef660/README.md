# `BoxLogShipper.saveOffsets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731159-731174](../../../../../../../reference/runtime/host-main.cjs#L731159-L731174) | `method` | sim | `force = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731159-731174](../../../../../../../reference/runtime/host-main.cjs#L731159-L731174) | 2 | 1 | 1 | 1 | 0 | 1 |

### host:731159

Chamadas escritas diretamente neste corpo: `Buffer.from`, `JSON.stringify`, `this.noteOffsetSaveFailed`, `this.noteOffsetSaveSucceeded`, `this.writeOffsets`.

Alvos de atribuição ou incremento: `record3[computed]`, `this.isOffsetsDirty`.

SHA-256 do trecho: `f3f696ae16655440272a07b47a7e228a4bdc9e1fd1a2a5f67bada425416ea4f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
