# `isOriginRepoReference`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-reference.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509116-509125](../../../../../../reference/runtime/host-main.cjs#L509116-L509125) | `FunctionDeclaration` | não | `raw, readOriginPrIdentityHosts` |
| [evaluation:556869-556878](../../../../../../reference/runtime/sand-eval-runner.cjs#L556869-L556878) | `FunctionDeclaration` | não | `raw, readOriginPrIdentityHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509116-509125](../../../../../../reference/runtime/host-main.cjs#L509116-L509125) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556869-556878](../../../../../../reference/runtime/sand-eval-runner.cjs#L556869-L556878) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509116

Chamadas escritas diretamente neste corpo: `isOriginGitHost`, `originPrIdentityHostsFor`, `portalRepoCloneUrl`, `repoReferenceAsUrl`.

SHA-256 do trecho: `e2dbab76e0dc5f32446778980f5c058385f4e88b3dee6d336a93bd7e9f8fbce0`.

### evaluation:556869

Chamadas escritas diretamente neste corpo: `isOriginGitHost`, `originPrIdentityHostsFor`, `portalRepoCloneUrl`, `repoReferenceAsUrl`.

SHA-256 do trecho: `7238f235d161f514e9a8a48c9900ffb55126ec2b911b01fdee2333d89c0e9680`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
