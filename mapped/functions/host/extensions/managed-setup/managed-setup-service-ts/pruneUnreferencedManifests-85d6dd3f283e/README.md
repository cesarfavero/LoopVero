# `pruneUnreferencedManifests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683669-683695](../../../../../../../reference/runtime/host-main.cjs#L683669-L683695) | `FunctionDeclaration` | sim | `manifestsRoot, manifests` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683669-683695](../../../../../../../reference/runtime/host-main.cjs#L683669-L683695) | 2 | 5 | 6 | 0 | 0 | 0 |

### host:683669

Chamadas escritas diretamente neste corpo: `.join`, `keptRevisionByIdentity.get`, `keptRevisionByIdentity.set`, `new Map`, `readdirOrEmpty`.

SHA-256 do trecho: `f667e2c8ab54a1f7eebbda003cacf6643f5b8d153accd758e54705e4a52dea15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
