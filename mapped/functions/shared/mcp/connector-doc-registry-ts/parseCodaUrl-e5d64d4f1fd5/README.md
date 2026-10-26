# `parseCodaUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774180-774185](../../../../../../reference/runtime/host-main.cjs#L774180-L774185) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573395-573400](../../../../../../reference/runtime/sand-eval-runner.cjs#L573395-L573400) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774180-774185](../../../../../../reference/runtime/host-main.cjs#L774180-L774185) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573395-573400](../../../../../../reference/runtime/sand-eval-runner.cjs#L573395-L573400) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:774180

Chamadas escritas diretamente neste corpo: `/_d([A-Za-z0-9_-]{6,})$/.exec`, `isHostOf`, `segmentsOf`.

SHA-256 do trecho: `96c2b0504432cb67de4da8bbb76c9156eef9b01d49003caa2989c0e00fdfa588`.

### evaluation:573395

Chamadas escritas diretamente neste corpo: `/_d([A-Za-z0-9_-]{6,})$/.exec`, `isHostOf`, `segmentsOf`.

SHA-256 do trecho: `96c2b0504432cb67de4da8bbb76c9156eef9b01d49003caa2989c0e00fdfa588`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
