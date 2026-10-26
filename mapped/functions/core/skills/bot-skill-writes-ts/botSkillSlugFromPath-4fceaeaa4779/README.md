# `botSkillSlugFromPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `core/skills/bot-skill-writes.ts` · [README do módulo](../../../../../modules/core/skills/bot-skill-writes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762031-762034](../../../../../../reference/runtime/host-main.cjs#L762031-L762034) | `FunctionDeclaration` | não | `filePath` |
| [evaluation:554609-554612](../../../../../../reference/runtime/sand-eval-runner.cjs#L554609-L554612) | `FunctionDeclaration` | não | `filePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762031-762034](../../../../../../reference/runtime/host-main.cjs#L762031-L762034) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554609-554612](../../../../../../reference/runtime/sand-eval-runner.cjs#L554609-L554612) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762031

Chamadas escritas diretamente neste corpo: `/\/skills\/([^/]+)\/SKILL\.md$/.exec`.

SHA-256 do trecho: `40f7e62ccf0bccaae07428333f6e40ceeed6b81ebeb4d941d757ede49a9ebbdb`.

### evaluation:554609

Chamadas escritas diretamente neste corpo: `/\/skills\/([^/]+)\/SKILL\.md$/.exec`.

SHA-256 do trecho: `40f7e62ccf0bccaae07428333f6e40ceeed6b81ebeb4d941d757ede49a9ebbdb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
