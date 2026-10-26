# `ManagedSetupService.converge`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683577-683611](../../../../../../../reference/runtime/host-main.cjs#L683577-L683611) | `method` | sim | `force, teamSecrets, manifests` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683577-683611](../../../../../../../reference/runtime/host-main.cjs#L683577-L683611) | 4 | 0 | 2 | 4 | 1 | 1 |

### host:683577

Chamadas escritas diretamente neste corpo: `.catch`, `Date.now`, `Math.min`, `errorLogTag`, `manifests.reduce`, `sandSetupAssignmentHash`, `this.launchConverge`, `this.readStatus`, `this.reportConverge`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `f10e3f2d39f8bd542daf539e37e3f6ae4579c73914121e3d3c1b18a60f6c7415`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
