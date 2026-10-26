# `shaOfMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546428-546434](../../../../../../reference/runtime/sand-eval-runner.cjs#L546428-L546434) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546428-546434](../../../../../../reference/runtime/sand-eval-runner.cjs#L546428-L546434) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:546428

Chamadas escritas diretamente neste corpo: `messageShaByIdentity.get`, `messageShaByIdentity.set`, `messageText`, `sha256HexOfText`.

SHA-256 do trecho: `7979654afd2f2cb6391fa04fc92edc4e0821ca1bc5590b2bbe52baa5a473c1fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
