# `fetchSandManagedSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/managed-setup/cursor-skills-marketplace.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/cursor-skills-marketplace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683347-683363](../../../../../../../reference/runtime/host-main.cjs#L683347-L683363) | `FunctionDeclaration` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683347-683363](../../../../../../../reference/runtime/host-main.cjs#L683347-L683363) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:683347

Chamadas escritas diretamente neste corpo: `client.getManagedSkills`, `createDashboardClient`, `new GetManagedSkillsRequest`, `response.skills.map`.

SHA-256 do trecho: `d7367de900a45cab62a96310588d1d477fbb55e3faa3e61ee139dcbbd94ecaaa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
