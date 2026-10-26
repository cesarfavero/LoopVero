# `isRepoSkillDescriptor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-custom-mode.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-custom-mode-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509877-509879](../../../../../../reference/runtime/host-main.cjs#L509877-L509879) | `FunctionDeclaration` | não | `skill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509877-509879](../../../../../../reference/runtime/host-main.cjs#L509877-L509879) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509877

Chamadas escritas diretamente neste corpo: `skill.sourcePath.trim`.

SHA-256 do trecho: `af949ba4e5eefed3dad7994d80612c6dbaa6ab84dba0703835ce72d819879fd3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
