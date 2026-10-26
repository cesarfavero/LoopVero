# `SandInferenceCredentialRenewer.requestImmediateRenewal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/credential-renewer.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454249-454260](../../../../../../../reference/runtime/host-main.cjs#L454249-L454260) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454249-454260](../../../../../../../reference/runtime/host-main.cjs#L454249-L454260) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:454249

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `Promise.withResolvers`, `interrupt`, `renewal.promise.then`, `this.onDemandRenewal.promise.then`.

Alvos de atribuição ou incremento: `this.onDemandRenewal`.

SHA-256 do trecho: `363eb8bb1a6ef8d965d01f9160f1b289da3fc94bb84e4a4e9ee9964e5ed93f80`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
