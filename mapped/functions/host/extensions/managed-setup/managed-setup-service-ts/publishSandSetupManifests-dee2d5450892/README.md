# `publishSandSetupManifests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683643-683651](../../../../../../../reference/runtime/host-main.cjs#L683643-L683651) | `FunctionDeclaration` | sim | `manifests, paths = defaultPaths` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683643-683651](../../../../../../../reference/runtime/host-main.cjs#L683643-L683651) | 0 | 1 | 4 | 0 | 0 | 0 |

### host:683643

Chamadas escritas diretamente neste corpo: `manifestPath`, `pruneUnreferencedManifests`, `sandSetupAssignment`, `validateManifests`, `writeJsonAtomic`.

SHA-256 do trecho: `ff8bd30805cf0745f957de4109187f995e6cd35bbd374b7d06e4662c879b7a09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
