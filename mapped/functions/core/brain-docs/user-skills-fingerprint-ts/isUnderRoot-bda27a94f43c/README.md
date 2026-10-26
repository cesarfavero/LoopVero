# `isUnderRoot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/brain-docs/user-skills-fingerprint.ts` · [README do módulo](../../../../../modules/core/brain-docs/user-skills-fingerprint-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784805-784807](../../../../../../reference/runtime/host-main.cjs#L784805-L784807) | `FunctionDeclaration` | não | `relPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784805-784807](../../../../../../reference/runtime/host-main.cjs#L784805-L784807) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784805

Chamadas escritas diretamente neste corpo: `import_node_path174.posix.isAbsolute`, `relPath.startsWith`.

SHA-256 do trecho: `0f88804cee7c7465034ab3e4c44e95e4aa01f3cb74b08aea50c21e07effb0869`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
