# `createOrbitDaemonSessionController/leaseDeadlines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706072-706085](../../../../../../../reference/runtime/host-main.cjs#L706072-L706085) | `FunctionDeclaration` | não | `expiresAt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706072-706085](../../../../../../../reference/runtime/host-main.cjs#L706072-L706085) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:706072

Chamadas escritas diretamente neste corpo: `Number`, `deps.clock.monotonicNow`, `deps.clock.now`, `expiresAt.getTime`, `new ConnectError`.

Alvos de lançamento explícito: `ConnectError`.

SHA-256 do trecho: `a4069ec993f57a839a54a1941e6e2dc0fbfdaf7bf708ad393c44a8cd7e01accc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
