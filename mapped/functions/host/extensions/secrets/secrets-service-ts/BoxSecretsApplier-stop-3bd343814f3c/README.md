# `BoxSecretsApplier.stop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/secrets/secrets-service.ts` · [README do módulo](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709214-709218](../../../../../../../reference/runtime/host-main.cjs#L709214-L709218) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709214-709218](../../../../../../../reference/runtime/host-main.cjs#L709214-L709218) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:709214

Chamadas escritas diretamente neste corpo: `this.notifyApplied`, `this.stopSignal.abort`.

Alvos de atribuição ou incremento: `this.isStopped`.

SHA-256 do trecho: `9be61760a035b689ac23629e432a869aca7fa039a6e1d028380bb1ea04864de4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
