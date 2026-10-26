# `CredentialFillExecutor.listTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-executor.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:544646-544676](../../../../../../../reference/runtime/host-main.cjs#L544646-L544676) | `method` | sim | `browserCdpPort, targetId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544646-544676](../../../../../../../reference/runtime/host-main.cjs#L544646-L544676) | 5 | 0 | 1 | 6 | 0 | 1 |

### host:544646

Chamadas escritas diretamente neste corpo: `TARGET_LOOKUP_DEADLINE.run`, `connectionRefusedSchema.safeParse`, `errorLogTag`, `targetListSchema.parse`, `targets.find`, `this.options.reportFailure`, `trustedTargetWebSocket`.

SHA-256 do trecho: `8c6944d11d45160f7d99608a0fac0fbc1d2cfc06f42e19ad41cff45f01078299`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
