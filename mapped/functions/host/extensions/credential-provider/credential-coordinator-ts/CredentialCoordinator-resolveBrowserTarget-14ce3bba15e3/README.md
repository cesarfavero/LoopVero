# `CredentialCoordinator.resolveBrowserTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/credential-coordinator.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/credential-coordinator-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:548414-548450](../../../../../../../reference/runtime/host-main.cjs#L548414-L548450) | `method` | sim | `item, siteHint, windowIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548414-548450](../../../../../../../reference/runtime/host-main.cjs#L548414-L548450) | 7 | 0 | 1 | 2 | 1 | 1 |

### host:548414

Chamadas escritas diretamente neste corpo: `this.auditAgentAccess`, `this.log`, `this.options.resolveBrowserTarget`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `438a3917830abedbf3649b2c88ac336fdbdbad228076c4c48f7d1b9933339f28`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
