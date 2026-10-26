# `createOrbitDaemonProxySupervisor/performDispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy-supervisor.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-supervisor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705602-705609](../../../../../../../reference/runtime/host-main.cjs#L705602-L705609) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705602-705609](../../../../../../../reference/runtime/host-main.cjs#L705602-L705609) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:705602

Chamadas escritas diretamente neste corpo: `abortController.abort`, `proxy.stop`.

Alvos de atribuição ou incremento: `activeProxy`, `disposed`.

SHA-256 do trecho: `3a8630a64bcc2a0c118c9b3ba98bb85a23f2062130f1672d54b145b2785adb5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
