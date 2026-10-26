# `managedSkillRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/skills/managed-skills.ts` · [README do módulo](../../../../../modules/core/skills/managed-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683963-683965](../../../../../../reference/runtime/host-main.cjs#L683963-L683965) | `FunctionDeclaration` | não | `dataRoots` |
| [evaluation:534346-534348](../../../../../../reference/runtime/sand-eval-runner.cjs#L534346-L534348) | `FunctionDeclaration` | não | `dataRoots` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683963-683965](../../../../../../reference/runtime/host-main.cjs#L683963-L683965) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534346-534348](../../../../../../reference/runtime/sand-eval-runner.cjs#L534346-L534348) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683963

Chamadas escritas diretamente neste corpo: `dataRoots.map`.

SHA-256 do trecho: `068ae5884ce0411af5d42abe5b0491bc2278c3b6a97db8ff327b41c36445f421`.

### evaluation:534346

Chamadas escritas diretamente neste corpo: `dataRoots.map`.

SHA-256 do trecho: `946651d87e438ea9f1250e4e6086177bba4c1d2f8d16c34b63e18baa72dc64dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
