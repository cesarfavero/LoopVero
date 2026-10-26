# `isSafePluginSkillId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/plugin-skills-cache.ts` · [README do módulo](../../../../../modules/host/skills/plugin-skills-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684271-684273](../../../../../../reference/runtime/host-main.cjs#L684271-L684273) | `FunctionDeclaration` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684271-684273](../../../../../../reference/runtime/host-main.cjs#L684271-L684273) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684271

Chamadas escritas diretamente neste corpo: `/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test`.

SHA-256 do trecho: `cd79828b95b4610e826cb35c0a312cf689bd7b2335ec32dc00a518fc24d8dbb9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
