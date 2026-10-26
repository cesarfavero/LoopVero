# `_MeetingSite.httpsUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772244-772250](../../../../../../reference/runtime/host-main.cjs#L772244-L772250) | `method` | não | `trimmed` |
| [evaluation:571473-571479](../../../../../../reference/runtime/sand-eval-runner.cjs#L571473-L571479) | `method` | não | `trimmed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772244-772250](../../../../../../reference/runtime/host-main.cjs#L772244-L772250) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:571473-571479](../../../../../../reference/runtime/sand-eval-runner.cjs#L571473-L571479) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:772244

Chamadas escritas diretamente neste corpo: `URL.canParse`, `_MeetingSite.hasScheme.test`, `new URL`.

SHA-256 do trecho: `a27f971083f3eed924727c5eab79d6fa0a25dd3c8f0e3cb4ef800afd7202bd3d`.

### evaluation:571473

Chamadas escritas diretamente neste corpo: `URL.canParse`, `_MeetingSite.hasScheme.test`, `new URL`.

SHA-256 do trecho: `ee51fdb61b6b5b2a7d58a1f2cc5c14492dcd9546c0b8a2fc2609cff1c8c3117e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
