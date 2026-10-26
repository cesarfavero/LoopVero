# `SandManagedSetupClient.fetchSetupManifests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/sand-managed-setup-client.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/sand-managed-setup-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684057-684099](../../../../../../../reference/runtime/host-main.cjs#L684057-L684099) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684057-684099](../../../../../../../reference/runtime/host-main.cjs#L684057-L684099) | 2 | 1 | 1 | 1 | 2 | 0 |

### host:684057

Chamadas escritas diretamente neste corpo: `assignedTeamIds.has`, `bundle.secrets.map`, `manifests.map`, `new SandManagedSetupClientError`, `new Set`, `response.manifests.map`, `seenTeams.add`, `seenTeams.has`, `teamSecrets.push`, `this.client.listSandSetupManifests`.

Alvos de lançamento explícito: `SandManagedSetupClientError`.

SHA-256 do trecho: `8e16d772e5e9f0bb5fb70426ec2e97edafff7e357f30c7679dd9bc2c91dc4c29`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
