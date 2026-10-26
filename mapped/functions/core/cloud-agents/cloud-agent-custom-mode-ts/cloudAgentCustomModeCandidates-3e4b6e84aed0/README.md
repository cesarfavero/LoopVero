# `cloudAgentCustomModeCandidates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-custom-mode.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-custom-mode-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509880-509898](../../../../../../reference/runtime/host-main.cjs#L509880-L509898) | `FunctionDeclaration` | não | `response` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509880-509898](../../../../../../reference/runtime/host-main.cjs#L509880-L509898) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:509880

Chamadas escritas diretamente neste corpo: `candidates.push`, `isRepoSkillDescriptor`, `new Set`, `nonRepo.add`, `nonRepo.has`, `normalizeCustomModeName`, `rawName.trim`, `seen.add`, `seen.has`.

SHA-256 do trecho: `faf98a086324e8d9a1ac6d3a8cd666a523140c4d67c10222cb8cb9f4581722e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
