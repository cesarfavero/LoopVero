# `ManagedSetupService.scopeToGoverningTeam`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683620-683641](../../../../../../../reference/runtime/host-main.cjs#L683620-L683641) | `method` | não | `fetched` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683620-683641](../../../../../../../reference/runtime/host-main.cjs#L683620-L683641) | 3 | 0 | 0 | 2 | 1 | 0 |

### host:683620

Chamadas escritas diretamente neste corpo: `fetched.manifests.filter`, `fetched.teamSecrets.filter`, `new SandManagedSetupError`, `this.log`.

Alvos de lançamento explícito: `SandManagedSetupError`.

SHA-256 do trecho: `c8c8e3d7a82124df8f4054d8c8eac6b20f7a9b8b638230824af8773c42244d39`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
