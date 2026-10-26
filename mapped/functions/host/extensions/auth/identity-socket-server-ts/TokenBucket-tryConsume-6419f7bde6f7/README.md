# `TokenBucket.tryConsume`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/identity-socket-server.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499458-499473](../../../../../../../reference/runtime/host-main.cjs#L499458-L499473) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499458-499473](../../../../../../../reference/runtime/host-main.cjs#L499458-L499473) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:499458

Chamadas escritas diretamente neste corpo: `Math.min`, `performance.now`.

Alvos de atribuição ou incremento: `this.lastRefillMs`, `this.tokens`.

SHA-256 do trecho: `d056a1618dbd179cc6b577bc8b93f39e669563820c645ea63444ddd6d196df56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
