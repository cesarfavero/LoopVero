# `OnePasswordBrokerBridge.listServiceWorker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:549960-549995](../../../../../../../reference/runtime/host-main.cjs#L549960-L549995) | `method` | sim | `cdpPort` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549960-549995](../../../../../../../reference/runtime/host-main.cjs#L549960-L549995) | 6 | 0 | 2 | 6 | 0 | 1 |

### host:549960

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `Array.isArray`, `createDeadlinePolicy`, `deadline.run`, `errorLogTag`, `findSystemErrno`, `listedDebuggerUrl`, `payload.map`, `this.options.log`, `this.readExtensionId`, `workerUrl.toString`.

Alvos de atribuição ou incremento: `payload`.

SHA-256 do trecho: `21709c092036d331ae94f38ef8c2c14e51596cfa5b0210bcd61c7a54569a319c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
