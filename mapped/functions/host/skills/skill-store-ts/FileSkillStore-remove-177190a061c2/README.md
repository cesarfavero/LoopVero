# `FileSkillStore.remove`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `host/skills/skill-store.ts` · [README do módulo](../../../../../modules/host/skills/skill-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721156-721163](../../../../../../reference/runtime/host-main.cjs#L721156-L721163) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721156-721163](../../../../../../reference/runtime/host-main.cjs#L721156-L721163) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:721156

Chamadas escritas diretamente neste corpo: `this.automations.remove`, `this.get`, `this.library.get`, `this.library.remove`.

SHA-256 do trecho: `b9c2996756df4982b6fc23ab9438ddbf3c3c18ac77fccb8a9ac7cdac666943c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
