# `toProjectTree`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-projects.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509013-509041](../../../../../../reference/runtime/host-main.cjs#L509013-L509041) | `FunctionDeclaration` | não | `subtree, readPortalBaseUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509013-509041](../../../../../../reference/runtime/host-main.cjs#L509013-L509041) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:509013

Chamadas escritas diretamente neste corpo: `.map`, `counts.get`, `counts.set`, `mapRunStatus`, `new Map`, `subtree.nodes.map`.

SHA-256 do trecho: `a598dd5481fc7294ac751478d07c554e5807e3d44bd5dce4ecc431c5103b2cf1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
